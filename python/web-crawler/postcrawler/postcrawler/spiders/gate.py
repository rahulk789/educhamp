
import json
from scrapy.utils.project import get_project_settings
import scrapy
def firebase_store(data:list):
    db = firestore.client()
    db.collection('examdetails').document('gate').collection('scrapy-data').document('imporatant-event').set({
            'data': data
        })
class GateSpider(scrapy.Spider):
    name = 'gate'
    start_urls = [
            'https://gate.iitkgp.ac.in/important_dates.html'
            ]
    def parse(self, response):
        # links = response.css('a').xpath('@href').getall()
        heading = response.xpath('//td[1]').getall()
        i=0
        data = []
        while i<(len(heading)):
            dataitem = {
                "activity" : response.xpath('//td[1]')[i].get(),
                'date' : response.xpath('//td[2]')[i].get() + response.xpath('//td[3]')[i].get() 
            }
            data.append(dataitem)
            i+=1
        firebase_store(data)
#settings = get_project_settings()
#process = CrawlerProcess(settings)
#process.crawl(Spider)
#process.start()
