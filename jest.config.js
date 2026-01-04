module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Esto le dice a Jest que transforme los archivos .ts usando ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // Importante para que reconozca las rutas de tus archivos
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};