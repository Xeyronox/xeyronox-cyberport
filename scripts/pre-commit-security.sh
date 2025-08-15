
#!/bin/bash

echo "🔒 Running pre-commit security checks..."

# Check for potential secrets
echo "🕵️  Scanning for secrets..."
if grep -r --exclude-dir=node_modules --exclude-dir=.git -E "(password|secret|key|token|api_key)" . | grep -v "scripts/pre-commit-security.sh"; then
    echo "⚠️  Potential secrets found! Please review before committing."
    exit 1
fi

# Run dependency audit
echo "📦 Checking dependencies..."
npm audit --audit-level=high --production

# Lint TypeScript for security
echo "📝 Running TypeScript checks..."
npx tsc --noEmit

echo "✅ Pre-commit security checks passed!"
