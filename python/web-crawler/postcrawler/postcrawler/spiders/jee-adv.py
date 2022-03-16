from distutils.command.config import config
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
 
# from scrapy.crawler import CrawlerProcess
import json
from scrapy.utils.project import get_project_settings
import scrapy


db = firestore.client()

class JeeAdvSpider(scrapy.Spider):
    name = 'jee-adv'
    start_urls = [
        'https://jeeadv.ac.in/schedule.html'
    ]
    def parse(self, response):
        # links = response.css('a').xpath('@href').getall()
        heading = response.xpath('//td/text()').getall()
        i=0
        data = []
        while i<(len(heading)/3):
            dataitem = {
                "activity" : response.xpath('//td[2]')[i].get(),
                'date' : response.xpath('//td[3]')[i+1].get()
            }
            data.append(dataitem)
            i+=1
        self.log(data)
        db.collection('examdetails').document('jee-adv').collection('scrapy-data').document('imporatant-event').set({
            'data': data
        })
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