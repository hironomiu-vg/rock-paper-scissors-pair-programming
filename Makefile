CP?=$(shell which cp)
NPM?=$(shell which npm)

install:
	$(CP) ./config.json.template ./config.json
	$(NPM) install
