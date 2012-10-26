hackMichigan
============

Currently running at:
http://hackmichigan.com/


## Running

Unfortunately we didn't proxy the connection with something like nginx, so we've got to run node as root which is horribly insecure and I cannot advise.  Node will listen on port 80 in production, 5000 in development.

### Development

`foreman start dev` is the command to run.

### Production

It might literally kill me to type this, but run `(sudo) forman start`
