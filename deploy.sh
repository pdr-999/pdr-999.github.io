#!/bin/sh
mkdir out/assets &&
mv out/_next out/assets &&
rm -r docs && 
mv out docs &&
touch docs/.nojekyll
