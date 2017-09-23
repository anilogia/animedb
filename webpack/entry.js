import Clipboard from 'clipboard';
import hljs from 'highlight.js';

import { generateId } from './utils';

const ANIME_KEYS = [
  'madb_id',
  'medium',
  'duplicated',
  'id',
  'title',
  'suffix',
  'ruby',
  'started_year',
  'started_month',
  'started_day',
  'ended_year',
  'ended_month',
  'ended_day',
  'broadcast',
  'author',
  'original_title',
  'madb_uri',
  'official_uri',
  'memo',
  'annict_id',
];

function generateAnimeTemplate() {
  const id = generateId();
  const values = { id };

  return ANIME_KEYS.map((key, index) => {
    const entry = [ key, values[key] || '' ].join(': ');
    const prefix = (index === 0 ? '- ' : '  ');

    return prefix + entry;
  }).join('\n');
}

function generateRandomIds(num = 25) {
  const ids = [];

  for (let i = 0; i < num; i++) {
    ids.push(generateId());
  }

  return ids;
}

function updateAnimeTemplate() {
  const elem = document.getElementById('anime-template');

  if (!elem) return;

  elem.innerText = generateAnimeTemplate();

  hljs.highlightBlock(elem);
}

function updateRandomIds() {
  const elem = document.getElementById('random-ids');

  if (!elem) return;

  elem.innerText = generateRandomIds().join('\n');

  hljs.highlightBlock(elem);
}

hljs.initHighlightingOnLoad();

$(() => {
  $('.button-collapse').sideNav();

  updateAnimeTemplate();
  updateRandomIds();

  const clipboard = new Clipboard('#anime-template-copy');

  clipboard.on('success', (e) => {
    e.clearSelection();

    Materialize.toast('コピーが完了した', 2500);
  });

  clipboard.on('error', () => {
    Materialize.toast('コピーに失敗した', 2500);
  });

  $('#anime-template-regenerate').click((e) => {
    updateAnimeTemplate();

    Materialize.toast('生成が完了した', 2500);
  });

  $('#random-ids-regenerate').click(() => {
    updateRandomIds();

    Materialize.toast('生成が完了した', 2500);
  });
});
