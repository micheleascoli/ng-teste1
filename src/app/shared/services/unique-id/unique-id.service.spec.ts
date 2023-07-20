import { UniqueIdService as UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach (() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
      const id = service.generateUniqueIdWithPrefix('app');
      expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
      // O Set ele não aceita valores duplicados.
      const ids = new Set();
      //Gerando 50 ids, se houver algum repetido não dará erro.
      //Mas o Set não vai adicionar.
      for (let i = 0; i < 50; i++) {
       ids.add(service.generateUniqueIdWithPrefix('app'));
      }
      // Agora só verifica se o tamanho do Set é igual a 50.
      // se for menor é porque houve valores duplicados.
      expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
      service.generateUniqueIdWithPrefix('app');
      service.generateUniqueIdWithPrefix('app');
      expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
      const emptyValues = [null, undefined, '', '0', '1'];
      emptyValues.forEach(emptyValue => {
        expect(() => service.generateUniqueIdWithPrefix(emptyValue)).toThrow();
      })
  });

});


