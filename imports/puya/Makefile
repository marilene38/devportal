# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD   ?= poetry run sphinx-build
SOURCEDIR     = .
BUILDDIR      = _build
FULL_SPHINX_COMMAND = $(SPHINXBUILD) -M starlight "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS)

.PHONY: help Makefile

clean: 
	rm -rf _build || rm -rf apidocs

puya: clean
	export SPHINX_REPO=puya && \
	$(FULL_SPHINX_COMMAND) && \
	cp -r _build/starlight/apidocs/algopy/* "../../src/content/docs/reference/algorand-python/API Reference"

