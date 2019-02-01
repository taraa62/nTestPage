module.exports = {

    apps: [
        {
            name: 'mypage',
            script: "entry.js",
            kill_timeout: 200,
            exec_mode: "mypage",
            max_memory_restart: "5G",
            instances: 1,
            watch: false,
            env: {
                "COMMON_VARIABLE": "true"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
}
