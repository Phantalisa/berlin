#!/usr/bin/env python3
"""
Enhanced HTTP server with proper UTF-8 encoding headers
Usage: python3 server.py [port]
"""

import http.server
import socketserver
import sys

# Default port
PORT = 8000
if len(sys.argv) > 1:
    try:
        PORT = int(sys.argv[1])
    except ValueError:
        print(f"Invalid port number: {sys.argv[1]}")
        sys.exit(1)

class UTF8Handler(http.server.SimpleHTTPRequestHandler):
    """Ensure all text-based content is served with correct UTF-8 encoding."""
    
    def send_response_only(self, code, message=None):
        """Send the response code and add encoding headers for text content"""
        super().send_response_only(code, message)
        
    def send_header(self, keyword, value):
        """Add proper encoding headers for text-based content types"""
        if keyword.lower() == 'content-type' and ('text/' in value.lower() or 
                                                 'application/javascript' in value.lower() or
                                                 'application/json' in value.lower() or
                                                 'xml' in value.lower()):
            if 'charset=' not in value.lower():
                value = f"{value}; charset=utf-8"
        super().send_header(keyword, value)

    def end_headers(self):
        """Send extra encoding headers before ending"""
        self.send_header('Content-Language', 'de')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()

if __name__ == "__main__":
    Handler = UTF8Handler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving with UTF-8 encoding at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            httpd.server_close()
