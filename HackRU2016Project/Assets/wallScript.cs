using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class wallScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
   

    public void OnTrigger2D(Collider2D other)
    {
        if (other.tag == "player01")
        {
            Destroy(other.gameObject);
        }
        
    }
}
