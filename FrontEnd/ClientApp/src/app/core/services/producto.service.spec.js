"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var producto_service_1 = require("./producto.service");
describe('ProductoService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(producto_service_1.ProductoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=producto.service.spec.js.map