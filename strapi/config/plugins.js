module.exports = ({ env }) => ({
  meilisearch: {
    config: {
      host: `${env('MEILI_PROTOCOL', 'http')}://${env('MEILI_HOST', 'meilisearch')}:${env('MEILI_PORT', '7700')}`,
      apiKey: env('MEILI_MASTER_KEY', 'meili_master_key'),
    }
  }
})