export class App {
  configureRouter(config, router) {
    config.title = 'Lance Fiondella';
    config.map([
      // { route: ['','research'], name: 'research',  moduleId: 'research',  nav: true, title: 'Research' },
      { route: ['','CV'],   name: 'cv',  moduleId: 'cv',  nav:true, title: 'CV' },
      // { route: 'Publications',  name: 'publications', moduleId: 'publications', nav:true,title: 'Publications' },
      { route: 'Students',  name: 'students', moduleId: 'students', nav:true,title: 'Students' },
      { route: 'Projects',  name: 'projects', moduleId: 'projects', nav:true,title: 'Projects' }
    ]);

    this.router = router;
  }
}
