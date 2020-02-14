#!/bin/bash

echo "Running..."

tsc "src/ex_$1" --strict

echo "Done."