#regex part needs to be configured
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
#from scrapy.crawler import CrawlerProcess
cred = credentials.Certificate('serviceAccountKey.json')
firebase_admin.initialize_app(cred)
import json
from scrapy.utils.project import get_project_settings
import scrapy
def firebase_store(data:list):
    db = firestore.client()
    db.collection('examdetails').document('kvpy').collection('scrapy-data').document('important-event').set({
            'data': data
        })
class KvpySpider(scrapy.Spider):
    name = 'kvpy'
    start_urls = [
            'http://www.kvpy.iisc.ernet.in/main/applications.htm'
            ]
    def parse(self, response):
        # links = response.css('a').xpath('@href').getall()
        heading = response.xpath('//td[1]').getall()
        i=1
        data = []
        while i<(len(heading)):
            dataitem = {
                "activity" : response.xpath('//td[1]')[i].get(),
                'date' : response.xpath('//td[2]')[i].get() 
            }
            data.append(dataitem)
            i+=1
        firebase_store(data)
#settings = get_project_settings()
#process = CrawlerProcess(settings)
#process.crawl(Spider)
#process.start()
