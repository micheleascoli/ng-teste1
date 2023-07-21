import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { Component } from "@angular/compiler/src/core";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";

describe(LikeWidgetComponent.name, () => {
  /**
   * Fixture é tudo aquilo criado para te permitir testar
   * o componente.
   * Wrapper é um cara que embrulha o componente que foi criado e te dá um monte
   *  de funções, um monte de métodos utilitários que você vai usar durante o teste.
   */
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () =>{
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  //Vai testar se no momento da fixture ser criada, não houve nenhum
  //problema para criação da instância do componente.
  it('Should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();

  })

});
