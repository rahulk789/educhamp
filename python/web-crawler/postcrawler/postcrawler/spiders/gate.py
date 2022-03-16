from distutils.command.config import config
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
#from scrapy.crawler import CrawlerProcess
import json
from scrapy.utils.project import get_project_settings
import scrapy



class Spider(scrapy.Spider):
    name = 'gate'
    start_urls = [
            'https://gate.iitkgp.ac.in/important_dates.html'
            ]
    def Parse(self, response):
        # links = response.css('a').xpath('@href').getall()
        heading = response.xpath('//td/text()').getall()
        i=0
        data = []
        while i<(len(heading)):
            dataitem = {
                "activity" : response.xpath('//td[1]')[i].get(),
                'date' : response.xpath('//td[2]'+'//td[3]')[i+1].get()
            }
            data.append(dataitem)
            i+=1
        self.log(data)
        db = firestore.client()
        db.collection('examdetails').document('gate').collection('scrapy-data').document('imporatant-event').set({'data': data})

#settings = get_project_settings()
#process = CrawlerProcess(settings)
#process.crawl(Spider)
#process.start()
