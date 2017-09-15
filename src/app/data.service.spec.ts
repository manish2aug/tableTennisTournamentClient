import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './services/teamService';

describe('TeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamService]
    });
  });

  it('should ...', inject([TeamService], (service: TeamService) => {
    expect(service).toBeTruthy();
  }));
});
