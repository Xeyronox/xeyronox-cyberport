
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔒 Running Security Audit...\n');

// Run npm audit
try {
  console.log('📦 Checking for dependency vulnerabilities...');
  execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
  console.log('✅ No vulnerabilities found in dependencies\n');
} catch (error) {
  console.log('⚠️  Vulnerabilities detected. Please review and update dependencies.\n');
}

// Check for sensitive files
console.log('🕵️  Scanning for sensitive files...');
const sensitivePatterns = [
  '.env',
  '.env.local',
  '.env.production',
  'config/secrets',
  'private_key',
  'id_rsa'
];

let foundSensitive = false;
sensitivePatterns.forEach(pattern => {
  if (fs.existsSync(pattern)) {
    console.log(`⚠️  Found sensitive file: ${pattern}`);
    foundSensitive = true;
  }
});

if (!foundSensitive) {
  console.log('✅ No sensitive files found in project root\n');
}

// Check TypeScript strict mode
console.log('📝 Checking TypeScript configuration...');
const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
if (tsConfig.compilerOptions?.strict) {
  console.log('✅ TypeScript strict mode is enabled');
} else {
  console.log('⚠️  TypeScript strict mode is not enabled');
}

console.log('\n🔒 Security audit complete!');
