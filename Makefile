APP=.

GIT_SHORT=$(shell git rev-parse --short HEAD)
GIT_LONG=$(shell git rev-parse HEAD)
GIT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)
GIT_TAG=$(shell git describe --always --tag --abbrev=0)
GIT_DIRTY=$(shell if ./git-require-clean.sh -q; then echo false; else echo true; fi)
DATE=$(shell date -u +"%Y-%m-%dT%H:%M:%SZ")

.PHONY: build version lint $(APP)/lib/git-version.js

build : version

lint :
	cd $(APP); meteor npm run lint

dirty :
	@echo dirty: $(GIT_DIRTY)

version : $(APP)/lib/git-version.js
$(APP)/lib/git-version.js :
	@echo "echo [git] > $@" # echo a summary of the following steps
	@echo "export default {" > $@
	@echo "  short: '$(GIT_SHORT)'," >> $@
	@echo "  long: '$(GIT_LONG)'," >> $@
	@echo "  branch: '$(GIT_BRANCH)'," >> $@
	@echo "  tag: '$(GIT_TAG)'," >> $@
	@echo "  dirty: $(GIT_DIRTY)," >> $@
	@echo "  date: '$(DATE)'," >> $@
	@echo "};" >> $@
