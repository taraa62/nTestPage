module.exports = {

    apps: [
        {
            name: 'cloaker',
            script: "entry.js",
            kill_timeout: 10,
            exec_mode: "cluster",
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
