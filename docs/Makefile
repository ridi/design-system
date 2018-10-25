.PHONY: install
install:
	gem install bundler --conservative
	bundle install
	npm install

.PHONY: start
start:
	npm start

.PHONY: build
build:
	npm run build

.PHONY: clean
clean:
	git clean -xdf --exclude=node_modules .
