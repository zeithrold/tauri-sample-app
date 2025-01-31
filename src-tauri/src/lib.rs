use serde::Deserialize;
use specta::Type;
use specta_typescript::Typescript;
use tauri_specta::{collect_commands, Builder};

#[tauri::command]
#[specta::specta]
fn say_hello(name: String) -> String {
    format!("Hello, {name}! You've been greeted from Rust!")
}

#[derive(Deserialize, Type)]
struct AddParams {
    a: i32,
    b: i32,
}

#[tauri::command]
#[specta::specta]
fn add(params: AddParams) -> i32 {
    params.a + params.b
}

pub fn handler() -> Builder {
    let builder = Builder::<tauri::Wry>::new().commands(collect_commands![say_hello, add]);

    #[cfg(debug_assertions)]
    {
        builder
            .export(
                Typescript::default().header("/* eslint-disable */"),
                "../src/bindings.ts",
            )
            .expect("Failed to export typescript bindings")
    }

    builder
}
