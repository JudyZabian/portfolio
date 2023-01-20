import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--header-->
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://company.de">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUayxlhWo-DVdhn8RZ-kOHoDnhM2aMkOuPdg&usqp=CAU" alt="Company: a modern Architectural Firm" >
    </a>
    <div class="navbar-burger" data-target="services">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="services" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/">
      Startseite
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
        Täsliles Brot
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
        Spezielle Legstagen
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
        Visualisierung
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
        BIM Koordination
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
        Unterstützung
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field ">
          <p class="control">
            <a class="bd-tw-button button" href="https://">
      Kontakt
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ANANASEH Architectural Firm';
}
