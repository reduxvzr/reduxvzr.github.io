const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Voronezh',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      //i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      //w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  disabled: ['todo-list'], // search-bar, crypto-rate, current-time, weather-forecast, status-bar
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'Props',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'AI',
        links: [
          {
            url: 'https://chatgpt.com/',
            name: 'ChatGPT',
            icon: 'recharging',
            icon_color: '#CD5C5C'
          },
          {
            name: 'Mistral',
            url: 'https://chat.mistral.ai/chat',
            icon: 'leaf',
            icon_color: '#64876d'
          },
          {
            name: 'Copilot',
            url: 'https://copilot.microsoft.com/',
            icon: 'chart-arcs',
            icon_color: '#FFEFD5'
          },
          {
            name: 'DuckDuckGoAI',
            url: 'https://duckduckgo.com/?q=DuckDuckGo&ia=chat',
            icon: 'robot',
            icon_color: '#FF8C00'
          },
        ]
      },
      {
        name: 'Music/Video',
        links: [
          {
            name: 'Youtube',
            url: 'https://www.youtube.com/',
            icon: 'brand-youtube',
            icon_color: '#B22222'
          },
          {
            name: 'Twitch',
            url: 'https://www.twitch.tv/',
            icon: 'brand-twitch',
            icon_color: '#8A2BE2'
          },
          {
            name: 'YMusic',
            url: 'https://music.youtube.com/library/playlists',
            icon: 'vinyl',
            icon_color: '#B22222'
          }
        ]
      },
      {
        name: 'Seaching',
        links: [
          {
            name: 'Startpage',
            url: 'https://www.startpage.com/',
            icon: 'search',
            icon_color: '#CCE5FF'
          },
          {
            name: 'Google',
            url: 'https://google.com',
            icon: 'brand-google',
            icon_color: '#A9A9A9'
          },
          {
            name: 'DuckDuckGo',
            url: 'https://duckduckgo.com/',
            icon: 'brand-firefox', 
            icon_color: '#D2691E'
          },
          {
            name: 'Yandex',
            url: 'https://ya.ru',
            icon: 'brand-yandex',
            icon_color: '#FFD700'
          },
          {
            name: 'Bookmarks',
            url: 'https://app.raindrop.io/my/45372873',
            icon: 'bookmark'
          },
        ]
      }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'Prog',
          links: [
            {
              name: 'GitHub',
              url: 'https://github.com/',
              icon: 'brand-github'
            },
            {
              name: 'DockerHub',
              url: 'https://hub.docker.com/',
              icon: 'brand-docker'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            },
            {
              name: 'r/sysadmin',
              url: 'https://www.reddit.com/r/sysadmin/'
            },
            {
              name: 'Arch Wiki',
              url: 'https://wiki.archlinux.org/'
            }
          ]
        },
        {
          name: 'Geek',
          links: [
            {
              name: 'Realme 10pplus',
              url: 'https://4pda.to/forum/index.php?showtopic=1068612',
              icon: 'circle-number-4',
              icon_color: '#87CEEB'
            },
            {
              name: 'LOR Linux',
              url: 'https://www.linux.org.ru/',
              icon: 'pointer', 
              icon_color: '#778899'
            },
            {
              name: 'Habr',
              url: 'https://habr.com/',
              icon: 'devices-pc'
              }
            ]
          },
        {
          name: 'misc',
          links: [
            {
              name: '2ip',
              url: 'https://2ip.ru/'
            },
            {
              name: 'Backup-hosting',
              url: 'https://disk.invs.ru/ispmgr#/dashboard?func=dashboard',
              icon: 'brand-onedrive',
              icon_color: '#977a3a'
            },
            {
              name: 'Pypi',
              url: 'https://pypi.org/',
              icon: 'brand-python',
              icon_color: '#977a3a'
            },
            {
              name: 'Reddit',
              url: 'https://www.reddit.com/',
              icon: 'brand-reddit',
              icon_color: '#B22222'
            }
          ]
        }
      ]
    },
    {
        name: 'Other',
        background_url: 'src/img/banners/bg-2.gif',
        categories: [
          {
            name: 'Translate',
            links: [
              {
                name: 'Reverso',
                url: 'https://www.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0',
                icon: 'language',
                icon_color: '#c57750'
              },
              {
                name: 'Deepl',
                url: 'https://www.deepl.com/ru/translator',
                icon: 'language-hiragana',
                icon_color: '#996767'
              },
              {
                name: 'Yandex Translate',
                url: 'https://translate.yandex.ru/',
                icon: 'brand-yandex',
                icon_color: '#FFD700'
              },
            ]
          },
          {
            name: 'Buy',
            links: [
              {
                name: 'Ozon',
                url: 'https://www.ozon.ru/',
              },
              {
                name: 'Yandex Market',
                url: 'https://market.yandex.ru/',
              },
              {
                name: 'Aliexpress',
                url: 'https://aliexpress.ru/'
              },
            ]
          }
        ]
      },
    ]
});
