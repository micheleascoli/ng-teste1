import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  /**
   * Fixture é tudo aquilo criado para te permitir testar
   * o componente.
   * Wrapper é um cara que embrulha o componente que foi criado e te dá um monte
   *  de funções, um monte de métodos utilitários que você vai usar durante o teste.
   */
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () =>{
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  //Vai testar se no momento da fixture ser criada, não houve nenhum
  //problema para criação da instância do componente.
  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, done => {
    //dispara ngOnInit()
    fixture.detectChanges();

    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });
    component.like();
  });

  //it('', () => {});

});
