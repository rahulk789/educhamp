# from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
import scrapy

class JeeAdvSpider(scrapy.Spider):
    name = 'jee-adv'
    start_urls = [
        'https://jeeadv.ac.in/schedule.html'
    ]
    def parse(self, response):
        # links = response.css('a').xpath('@href').getall()
        heading = response.xpath('//td/text()').getall()
        i=0
        # data =[]
        # item = []
        while i<(len(heading)/3):
            # if(i>=3):
            yield {
                'activity' : response.xpath('//td[2]/text()')[i].get(),
                'date' : response.xpath('//td[3]')[i+1].get(),
            }
            i+=1
            # else:
            #     {
            #         'index' : response.xpath('//td[1]/text()')[i].get(),
            #         'activity' : response.xpath('//td[2]/text()')[i].get(),
            #         'date' : response.xpath('//td[3]')[i+1].get(),
            #         'important-activity' : response.xpath('//td[2]/strong')[i].get(),
            #         'important' : response.xpath('//td[3]/strong')[i].get()
            #     }
            # with open('jee-adv-data.json','w') as output:
            #     output.write(data)
        # def link_extension_checker(url):
        #     if 'https' in url:
        #         return True
        #     elif '.html' in url:
        #         return False

        # def link_generator(url):
        #     return 'https://jeeadv.ac.in/' + url

        # while i < len(links):
        #     if '.pdf' in response.css('a').xpath('@href')[i].get():
        #         i+=1
        #         continue
        #     else:
        #         yield {
        #             'link': response.css('a').xpath('@href')[i].get() if link_extension_checker (response.css('a').xpath('@href')[i].get()) else link_generator(response.css('a').xpath('@href')[i].get())
        #         }
        #         i+=1
            
# settings = get_project_settings()
# process = CrawlerProcess(settings)
# process.crawl(JeeAdvSpider)
# process.start()              