import { ReactiveResource, StateConfig } from 'oi-angular-resource/core';
import { HttpConfig, HttpMethod, Get, Post, Put, Patch, Delete, Options, Head, Jsonp} from 'oi-angular-resource/http';

@HttpConfig({
  host: 'https://api.github.com',
  noTrailingSlash: true,
  url: '/users/:id'
})
export class ApiResource extends ReactiveResource {

  query   = Get({ isArray: true });
  get     = Get();
  create  = Post();
  update  = Patch();
  replace = Put();
  delete  = Delete();
}

export * from 'oi-angular-resource/core';
export * from 'oi-angular-resource/http';


