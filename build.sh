#!/usr/bin/env bash

# Usage:
#   ./build.sh
#
# This script generates various files built from 'animedb.yml'.
#

set -o errexit
set -o nounset
set -o pipefail

animedb_cmd='./animedb'

echo -n 'Generating Google IME dictionary...'

$animedb_cmd list --format=google_ime > ./dict/google-ime-dict.txt

echo 'done.'

echo -n 'Generating Microsoft IME dictionary...'

$animedb_cmd list --format=ms_ime > ./dict/ms-ime-dict.txt

echo 'done.'

echo -n 'Generating CSV files...'

$animedb_cmd list --format=csv > ./csv/animes.csv

echo 'done.'

echo -n 'Generating comparison files...'

$animedb_cmd compare_madbs ./madb/madb-basic-info-2015-11-01.csv ./madb/madb-basic-info-2016-10-23.csv

echo 'done.'
