﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using MemoAPI.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

[assembly: OwinStartup(typeof(MemoAPI.Startup))]

namespace MemoAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            //CreateMemo();
        }


        public void CreateMemo ()
        {
            ApplicationDbContext db = new ApplicationDbContext();

            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));

            var user = new ApplicationUser();
            user.UserName = "admin@lussier.com";
            user.Email = "admin@lussier.com";
            string userPass = "Passw0rd!";
            var chkUser = userManager.Create(user, userPass);

            db.Users.Add(user);





            db.Set<Memo>().Add(new Memo
            {
                MemoId = Guid.NewGuid().ToString(),
                Text = "Mise en contexte Vous aurez comme mandat de créer une application Web qui permettra de sauvegarder des mémos. Les mémos sont composés d’un texte,d’un titre,d’une date et d’un utilisateur.La persistance des données se fera localement sur le serveur(base de données et Entity Framework).Vous devrez aussi faire la gestion des utilisateurs.Chaque utilisateur voit seulement les mémos qu’il a écrit, sauf s’il a marqué le mémo comme public. Un mémo public est accessible par tous les utilisateurs.",
                titre = "Super Mémo Infini",
                date = DateTime.Now,
                Public = true,
                User = user,
                userid = user.Id
            });

            db.Set<Memo>().Add(new Memo
            {
                MemoId = Guid.NewGuid().ToString(),
                Text = "L'amour est une rose, chaque pétale une illusion, chaque épine une réalité.",
                titre = "L'amour",
                date = DateTime.Now,
                Public = true,
                User = user,
                userid = user.Id
            });
                                        
        }
    }
}