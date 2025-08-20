# Advanced DevOps Webserver

Static site served by Nginx in Docker. Built by Jenkins, code on GitHub.

## Build locally
```bash
# optional: create a local version.json if not running Jenkins
cat > version.json <<'JSON'
{"app":"advanced-webserver","build_number":"local","git_commit":"dev","branch":"local","built_at":"now","jenkins_url":""}
JSON

docker build -t advanced-webserver:local .
docker run -p 8085:80 advanced-webserver:local
# open http://localhost:8085
