import { TestBed } from '@angular/core/testing';

import { ProjectCardsService } from './project-card.service';

describe('ProjectCardService', () => {
  let service: ProjectCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
