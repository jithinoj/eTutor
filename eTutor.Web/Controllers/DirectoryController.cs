using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using eTutor.Web.Models;

namespace eTutor.Web.Controllers
{
    public class DirectoryController : ApiController
    {
        // GET api/values
        public IEnumerable<Folder> Get()
        {            
            var root = new DirectoryInfo(HttpContext.Current.Server.MapPath("~/Resources"));

            return root.GetDirectories()
                        .Select(x => new Folder
                        {
                            Name = x.Name
                        });
            
        }

        // GET api/values/5
        public IEnumerable<Folder> Get(string id)
        {   
            var root = new DirectoryInfo(HttpContext.Current.Server.MapPath("~/Resources/" + id));

            return root.GetFiles()
                        .Select(x => new Folder
                        {
                            Name = x.Name
                        });
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            //use the following line of code to delete a file from a file path..
            //File.Delete("pathname eg c/folder/a.mp3");
        }
    }
}