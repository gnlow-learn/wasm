const wasmCode = await Deno.readFile("simple.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const add = wasmInstance.exports.add as CallableFunction;
console.log(add(1, 2).toString());