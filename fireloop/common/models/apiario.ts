import { Model } from '@mean-expert/model';
/**
 * @module apiario
 * @description
 * Write a useful apiario Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {
    beforeSave: { name: 'before save', type: 'operation' }
  },
  remotes: {
    myRemote: {
      returns: { arg: 'result', type: 'array' },
      http: { path: '/my-remote', verb: 'get' }
    }
  }
})

class apiario {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {
    model.observe('access', (ctx: any, next: Function) => {
      console.log('access', JSON.stringify(ctx.query.where))
      next();
    })
  }

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('apiario: Before Save');
    next();
  }
  // Example Remote Method
  myRemote(next: Function): void {
    this.model.find(next);
  }
}

module.exports = apiario;
