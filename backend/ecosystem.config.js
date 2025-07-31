module.exports = {
  apps : [{
    name   : "nomos-api",
    script : "dist/index.js",
    instances: "max",
    exec_mode: "cluster",
    watch: false,
    env_production: {
       NODE_ENV: "production"
    }
  }]
}
