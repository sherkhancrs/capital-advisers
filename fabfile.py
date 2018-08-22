from fabric.api import run, sudo, env, hosts


server_ip = '195.201.217.12'

@hosts([server_ip])
def prod():
    env.hosts = [server_ip]
    env.branch = 'master'
    env.app_path = '/home/richard/capital-advisers'
    env.user = 'richard'
    env.password = 'stallman'

def git_stash():
    run('cd %s; git checkout %s; git stash' % (env.app_path, env.branch))

def git_pull():
    run('cd %s; git checkout %s; git pull' % (env.app_path, env.branch))

def generate_dist():
    run('cd %s; npm run generate' % env.app_path)

def npm_install():
    run('cd %s; npm install' % env.app_path)

def deploy():
    git_stash()
    git_pull()
    npm_install()
    generate_dist()
