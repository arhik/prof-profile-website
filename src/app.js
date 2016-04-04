export class App {
  configureRouter(config, router) {
    config.title = 'Lance Fiondella';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'research',         name: 'research',        moduleId: 'research',        nav: true, title: 'Research' },
      { route: 'students',  name: 'students', moduleId: 'students', nav: true, title: 'Students' }
    ]);

    this.router = router;
  }
}
