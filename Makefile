.PHONY: install
install:
	make -C docs install

.PHONY: start
start:
	make -C docs start

.PHONY: build
build:
	make -C docs build

.PHONY: clean
clean:
	make -C docs clean
