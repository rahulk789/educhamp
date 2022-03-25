import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json
from scrapy.utils.project import get_project_settings
import scrapy
def firebase_store(data:list):
    db = firestore.client()
    db.collection('examdetails').document('ntse').collection('scrapy-data').document('imporatant-event').set({
            'data': data
        })
class NtseSpider(scrapy.Spider):
    name = 'ntse'
    start_urls = [
            'https://sslc.karnataka.gov.in/new-page/NTSE-NMMS/en'
            ]
    def parse(self, response):
        # links = response.css('a').xpath('@href').getall()
        heading = response.xpath('//th[2]/text()').getall()
        i=1
        j=-1
        data = []
        while i<(16):
            x = response.xpath('//th[2]/text()')[i].get()
            if (x == '\r\n'):
                continue
            j+=1
            dataitem = {
                "activity" : response.xpath('//h4/span/a/text()')[j].get(),
                'date' : x  
            }
            data.append(dataitem)
            i+=1
        firebase_store(data)
#settings = get_project_settings()
#process = CrawlerProcess(settings)
#process.crawl(Spider)
#process.start()
