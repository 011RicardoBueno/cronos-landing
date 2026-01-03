#!/bin/bash
echo "🚀 Building Fluxo landing page..."
npm run build

echo ""
echo "📊 Build size:"
du -sh dist/

echo ""
echo "📁 Files in dist/:"
ls -lh dist/ | head -10

echo ""
echo "✅ Build complete!"
echo "🌐 Site: https://crono-wapp.netlify.app"
echo "📈 PageSpeed: https://pagespeed.web.dev/analysis/https-crono-wapp-netlify-app/..."

# Start preview server
echo ""
echo "Starting preview server on http://localhost:4173"
npm run preview