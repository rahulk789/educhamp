import scrapy
from distutils.command.config import config
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
if not firebase_admin.App :
    cred = credentials.Certificate("../serviceAccountKey.json")
    firebase_admin.initialize_app(cred)

def firebase_store(data:list,dataset:str):
    db = firestore.client()
    db.collection('examdetails').document('jee-adv').collection('scrapy-data').document(dataset).set({
        'data': data
    })

class RedditSpider(scrapy.Spider):
    name = 'jee-main'
    start_urls = [
        'https://jeemain.nta.nic.in/sitemap/'
    ]
    def parse(self, response):
        latest_events = response.xpath('//content/text()').getall()
        i = 0
        data = []
        while(i<len(latest_events)):
            dataitem = {
                "activity" : response.xpath('//content/text()')[i].get(),
                'date' : response.css('p').css('a').xpath('@href')[i].get()
            }
            data.append(dataitem)
            i+=1
        firebase_store(data,'latest-events')
        yield 



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        # links = response.css('a').xpath('@href').getall()
        # def link_extension_checker(url):
        #     if 'https' in url:
        #         return True
        #     elif '.html' in url:
        #         return False

        # def link_generator(url):
        #     return 'https://jeemain.nta.nic.in/' + url
        # i=0
        # while i < len(links):
        #     if '.pdf' in response.css('a').xpath('@href')[i].get():
        #         i+=1
        #         continue
        #     else:
        #         yield {
        #             'link': response.css('a').xpath('@href')[i].get() if link_extension_checker (response.css('a').xpath('@href')[i].get()) else link_generator(response.css('a').xpath('@href')[i].get())
        #         }
        #         i+=1
            
                