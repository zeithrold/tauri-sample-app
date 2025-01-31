use rspc::{Config, Router};

pub fn rspc_init() -> Router {
    let rspc_config = Config::new()
        .export_ts_bindings("../src/bindings.ts")
        .set_ts_bindings_header("/* eslint-disable */");
    <Router>::new()
        .config(rspc_config)
        .query("version", |t| t(|ctx, input: ()| "1.0.0"))
        .build()
}
