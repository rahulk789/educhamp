import scrapy

class RedditSpider(scrapy.Spider):
    name = 'jee-main'
    start_urls = [
        'https://jeemain.nta.nic.in/sitemap/'
    ]
    def parse(self, response):
        links = response.css('a').xpath('@href').getall()
        def link_extension_checker(url):
            if 'https' in url:
                return True
            elif '.html' in url:
                return False

        def link_generator(url):
            return 'https://jeemain.nta.nic.in/' + url
        i=0
        while i < len(links):
            if '.pdf' in response.css('a').xpath('@href')[i].get():
                i+=1
                continue
            else:
                yield {
                    'link': response.css('a').xpath('@href')[i].get() if link_extension_checker (response.css('a').xpath('@href')[i].get()) else link_generator(response.css('a').xpath('@href')[i].get())
                }
                i+=1
            
                