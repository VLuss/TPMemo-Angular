using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace MemoAPI.Models
{
    public class MemosController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Memos
        public IQueryable<Memo> GetMemos()
        {
            return db.Memos;
        }

        // GET: api/Memos/5
        [ResponseType(typeof(Memo))]
        public IHttpActionResult GetMemo(string id)
        {
            Memo memo = db.Memos.Find(id);
            if (memo == null)
            {
                return NotFound();
            }

            return Ok(memo);
        }

        // PUT: api/Memos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMemo(string id, Memo memo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != memo.MemoId)
            {
                return BadRequest();
            }

            db.Entry(memo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MemoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Memos
        [ResponseType(typeof(Memo))]
        public IHttpActionResult PostMemo(Memo memo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Memos.Add(memo);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (MemoExists(memo.MemoId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = memo.MemoId }, memo);
        }

        // DELETE: api/Memos/5
        [ResponseType(typeof(Memo))]
        public IHttpActionResult DeleteMemo(string id)
        {
            Memo memo = db.Memos.Find(id);
            if (memo == null)
            {
                return NotFound();
            }

            db.Memos.Remove(memo);
            db.SaveChanges();

            return Ok(memo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MemoExists(string id)
        {
            return db.Memos.Count(e => e.MemoId == id) > 0;
        }
    }
}