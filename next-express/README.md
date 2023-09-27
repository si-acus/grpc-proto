# Custom Express HTTP/2 Server example

## How to use



### Generate certificate

Create the public and private keys:

```bash
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout privateKey.key -out certificate.cert
```

Install it and run:

```bash
yarn
yarn build
yarn dev
```

## The idea behind the example

Most of the times the default Next server will be enough but sometimes you want to run your own server to customize routes or other kind of the app behavior. Next provides a [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) so you can customize as much as you want.

Because the Next.js server is just a node.js module you can combine it with any other part of the node.js ecosystem. In this case we are using a HTTP/2 server with the spdy package. Beside its name, the package spdy provides support for both http/2 (h2) and spdy (2,3,3.1), and allow to be combined with express to build a custom router on top of Next and serve content through HTTP/2.

The example shows a server that render and serves two single pages when their corresponding route are requested. You can obviously use more advanced express routing strategy depending on your needs.

Since no major browser support HTTP/2 without encryption, don't forget to generate self-signed local certificate for development purpose.
