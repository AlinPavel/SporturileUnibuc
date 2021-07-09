import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ReviewDetailComponent } from './review-detail.component';

describe('Component Tests', () => {
  describe('Review Management Detail Component', () => {
    let comp: ReviewDetailComponent;
    let fixture: ComponentFixture<ReviewDetailComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ReviewDetailComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: { data: of({ review: { idReview: 123 } }) },
          },
        ],
      })
        .overrideTemplate(ReviewDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ReviewDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load review on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.review).toEqual(jasmine.objectContaining({ idReview: 123 }));
      });
    });
  });
});
