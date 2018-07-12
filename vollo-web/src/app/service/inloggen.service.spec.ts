import { TestBed, inject } from "@angular/core/testing";

import { InloggenService } from "./inloggen.service";

describe("InloggenService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InloggenService]
    });
  });

  it("should be created", inject([InloggenService], (service: InloggenService) => {
    expect(service).toBeTruthy();
  }));
});
