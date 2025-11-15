export * from './value-object';

// Si necesitas usar fetch, importa node-fetch o usa el fetch nativo de Node 18+
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export default greet;
